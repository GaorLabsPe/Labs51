import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
    role: 'user' | 'model';
    text: string;
}

const suggestedPrompts = [
    '¿Cómo funciona n8n?',
    'Ver planes de precios',
    'Quiero hablar con un experto',
];

const ChatButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !chatRef.current) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
                chatRef.current = ai.chats.create({
                  model: 'gemini-2.5-flash',
                  config: {
                    systemInstruction: 'Eres un asistente virtual experto para Labs51, especializado en explicar cómo potenciamos los negocios online de nuestros clientes a través de la automatización avanzada con integración n8n. Tu objetivo es responder preguntas sobre nuestros servicios, especialmente sobre n8n, y guiar a los usuarios. Sé amable, profesional y conciso.',
                  },
                });
                setMessages([
                    { role: 'model', text: '¡Hola! ¿Listo para ver cómo tu tienda puede vender en piloto automático? Pregúntame cómo funciona o pide hablar con un experto.' }
                ]);
                setShowSuggestions(true); // Resetear sugerencias al abrir
            } catch (error) {
                 console.error("Failed to initialize Gemini Chat:", error);
                setMessages([
                    { role: 'model', text: 'Lo siento, el chat no está disponible en este momento.' }
                ]);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading || !chatRef.current) return;

        if (showSuggestions) {
            setShowSuggestions(false);
        }

        const userMessage: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        try {
            const stream = await chatRef.current.sendMessageStream({ message: messageText });
            let currentResponse = '';
            for await (const chunk of stream) {
                currentResponse += chunk.text;
                setMessages(prev => {
                    const updatedMessages = [...prev];
                    updatedMessages[updatedMessages.length - 1] = { role: 'model', text: currentResponse };
                    return updatedMessages;
                });
            }
        } catch (error) {
            console.error("Gemini API error:", error);
            setMessages(prev => {
                const updatedMessages = [...prev];
                updatedMessages[updatedMessages.length - 1] = { role: 'model', text: 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.' };
                return updatedMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };
    
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="w-80 h-[28rem] bg-[#111439] rounded-xl shadow-2xl flex flex-col border border-white/10">
                    <header className="bg-[#1c1f48] text-white p-4 rounded-t-xl border-b border-white/10">
                        <h3 className="font-bold text-lg">Asistente Labs51</h3>
                        <p className="text-sm text-slate-300">Respondo al instante</p>
                    </header>
                    <main className="flex-1 p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg px-3 py-2 ${msg.role === 'user' ? 'gradient-bg text-white' : 'bg-[#1c1f48] text-slate-200'}`}>
                                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {showSuggestions && messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {suggestedPrompts.map((prompt, index) => (
                                        <button
                                            key={index}
                                            onClick={() => sendMessage(prompt)}
                                            className="px-3 py-1 text-sm border border-white/30 rounded-full text-slate-200 hover:bg-white/10 transition-colors duration-200"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            )}
                             {isLoading && messages[messages.length - 1]?.text === '' && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1c1f48] rounded-lg px-3 py-2">
                                        <div className="flex items-center space-x-2">
                                            <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </main>
                    <footer className="p-2 border-t border-white/10 bg-[#111439] rounded-b-xl">
                        <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-transparent text-white"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="gradient-bg text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                                disabled={isLoading || !input.trim()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </button>
                        </form>
                    </footer>
                </div>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`gradient-bg text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 ${!isOpen ? 'animate-pulse-glow' : ''}`}
                aria-label="Toggle chat"
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>
        </div>
    );
};

export default ChatButton;