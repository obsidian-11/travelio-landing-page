function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoints)
  }
  

function addFlagToOptions() {
    const selectElement = document.getElementById('form-nationality-select');
    const options = selectElement.getElementsByTagName('option');

    
//    console.log(getFlagEmoji("IN"))
    
    for (let i = 0; i < options.length; i++) {
        if(i==0){
            console.log("yoo", options[i])
        }

    //   if (flag) {
    //     options[i].textContent = flag + ' ' + options[i].textContent;
    //   }
    }
  }
  

addFlagToOptions();