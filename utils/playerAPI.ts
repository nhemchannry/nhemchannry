class PlayerAPI {
	audio: HTMLAudioElement;
	private _repeat: boolean;
	blockTimeUpdate: boolean;
	constructor() {
	  this.audio = new Audio();
	  this.blockTimeUpdate = false;
	  this._repeat = false;
	  this.audio.addEventListener("ended", () => this.audioOnFinish());
	  this.audio.addEventListener("timeupdate", () => this.timeUpdate());
	}
	timeUpdate(): any {
	  throw new Error("Method not implemented.");
	}
  
  D:\TypeScript\nhemchannry\utils  resumeTrack() {
	  this.audio.play();
	}
  
	pauseTrack() {
	  this.audio.pause();
	}
  
	playTrack(track: any, context: any) {
	  if (!track.preview_url) {
		this.playNextTrack();
		return;
	  }
  
	  this.loadTrack(track.preview_url);
	  this.audio.play();
	}
  
	playNextTrack() {}
  
	playPrevTrack() {}
  
	startOver() {
	  this.audio.play();
	}
  
	loadTrack(src: string) {
	  this.audio.src = src;
	}
  
	get currentTime() {
	  return this.audio.currentTime;
	}
  
	get duration() {
	  return this.audio.duration;
	}
  
	get currentVolume() {
	  return this.audio.volume;
	}
  
	toggleRepeat() {
	  this._repeat = !this._repeat;
	}
  
	audioOnFinish() {
	  if (this._repeat) {
		//   this.currentTime = 0;
		this.startOver();
		return;
	  }
	  this.playNextTrack();
	}
  }
  
  const playerAPI = new PlayerAPI();
  export default playerAPI;
  