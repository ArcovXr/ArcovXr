import { useState } from "react";

export default function ChatBotUI() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Añade el mensaje del usuario
    setMessages(prev => [...prev, { role: "user", text: input }]);

    // Respuesta simulada
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: "user", text: input },
        { role: "bot", text: "⚙️ Ups, estamos haciendo ajustes. Inténtalo más tarde." }
      ]);
    }, 600);

    setInput("");
  };

  return (
    <div className="flex flex-col justify-between mx-auto mt-20 w-full max-w-3xl h-[80vh] rounded-2xl shadow-2xl bg-gradient-to-br from-black  to-cyan-700 shadow-lg shadow-cyan-400">
      {/* Header */}
      <div className="px-6 py-4 border-b border-blue-600/30">
        <h1 className="text-xl font-semibold text-white">ArcovXr Assistant</h1>
        <p className="text-sm text-gray-400">Tu asistente virtual está en fase beta</p>
      </div>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-800/50 scrollbar-track-transparent">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            🧠 Inicia la conversación escribiendo algo abajo
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "ml-auto bg-cyan-600 text-white"
                  : "mr-auto bg-cyan-800 text-blue-300 "
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Barra de entrada */}
      <div className="px-6 py-4 border-t border-blue-600/30 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 bg-gray-900/70 text-white px-4 py-3 rounded-xl outline-none border border-blue-700/30 focus:border-blue-500 placeholder-gray-500"
        />
        <button
          onClick={handleSend}
          className="px-5 py-3 rounded-xl bg-gray-900/70 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
