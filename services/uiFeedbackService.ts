
/**
 * Service to provide subtle UI audio feedback using Web Audio API.
 * This ensures low latency and avoids the need for external assets.
 */

class UIFeedbackService {
  private audioCtx: AudioContext | null = null;

  private init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  /**
   * Play a subtle click sound
   */
  playClick() {
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.1);
  }

  /**
   * Play a subtle success chime
   */
  playSuccess() {
    this.init();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    
    const playNote = (freq: number, start: number) => {
      const osc = this.audioCtx!.createOscillator();
      const gain = this.audioCtx!.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);
      
      gain.gain.setValueAtTime(0.05, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + 0.2);
      
      osc.connect(gain);
      gain.connect(this.audioCtx!.destination);
      
      osc.start(start);
      osc.stop(start + 0.2);
    };

    playNote(523.25, now); // C5
    playNote(659.25, now + 0.08); // E5
    playNote(783.99, now + 0.16); // G5
  }
}

export const uiFeedback = new UIFeedbackService();
