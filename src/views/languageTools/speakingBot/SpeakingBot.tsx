import { FormEvent, useEffect, useState } from "react";
import { VoiceSelector } from "./voiceSelector/VoiceSelector";
const synth = window.speechSynthesis;

export const SpeakingBot: React.FC = () => {
  const ttsNative = new SpeechSynthesisUtterance();
  ttsNative.text = 'Hallo, wie gehts?';
  const [textValue, setTextValue] = useState<string>('');
  const [selectedVoice, setSelectedVoice] = useState<number>(0);

  if (!synth)
    return <span>Aw... your browser does not support Speech Synthesis</span>;

  const speak = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textValue);
    utterance.voice = synth.getVoices()[selectedVoice];

    synth.speak(utterance);
  };
        
  return (
    <div>
      <h2>Speaking Bot</h2>
      <form onSubmit={speak}>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <VoiceSelector selected={selectedVoice} setSelected={setSelectedVoice} />
      <button type="submit">Speak</button>
    </form>

    </div>
  );
}