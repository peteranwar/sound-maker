function sequencer(){
    const kick = new Tone.Player('./drums/kick-electro01.wav').toMaster();
    const snare = new Tone.Player('./drums/snare-sumo.wav').toMaster();
    const clap = new Tone.Player('./drums/kick-oldschool.wav').toMaster();
    const crash = new Tone.Player('./drums/hihat-reso.wav').toMaster();
    // const openhat = new Tone.Player('./drums/openhat-analog.wav').toMaster();

    let index = 0;

    Tone.Transport.scheduleRepeat(repeat,'8n');
    Tone.Transport.start();
    function repeat() {
        let step = index % 8;
        // console.log('step');
        index++;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let clapInputs = document.querySelector(`.clap input:nth-child(${step + 1})`);
        let crashInputs = document.querySelector(`.crash input:nth-child(${step + 1})`);
        // let openhatInputs = document.querySelector(`.openhat input:nth-child(${step + 1})`);

        if (kickInputs.checked){
            kick.start()
        }
        if (snareInputs.checked){
            snare.start()
        }
        if (clapInputs.checked){
            clap.start()
        }
        if (crashInputs.checked){
            crash.start()
        }
        // if (openhatInputs.checked){
        //     openhat.start()
        // }

        
    }
}


sequencer();