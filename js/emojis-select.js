let emojis=['&#128515', '&#128536', '&#128531', '&#128534', '&#128564', '&#129300', '&#10024', '&#10071', '&#11088', '&#127752', '&#127802', '&#128064', '&#128138', '&#128161', '&#128178', '&#128218', '&#128176', '&#127822', '&#127838', '&#127851', '&#127866', '&#127874', '&#127875', '&#127876', '&#127877', '&#127881', '&#127912', '&#127915', '&#127918', '&#127925', '&#128054', '&#128057', '&#128032'];
        
        
        let container = document.querySelector(".container-emojis");
        let containerEmojisHTML = document.querySelector(".list-emojis");
        let selectEmojiHTML = document.querySelector(".select-emoji");
        selectEmojiHTML.addEventListener("click",show);
        containerEmojisHTML.addEventListener("click",(event)=>{
            if(event.target.tagName == "SPAN"){
                funcionSaludo(event.target.innerHTML);
            }
        })
        
        function containerEmojis(){
            let fragment = document.createDocumentFragment();

            for(emoji in emojis){
                let span = document.createElement("span");
                span.innerHTML=emojis[emoji];
                span.classList.add("emojis");
                span.id=(emoji);
                fragment.appendChild(span);
            }
            containerEmojisHTML.appendChild(fragment);
        }
        containerEmojis();

        let visible = false;
        function show(){
            if(visible == false){
                containerEmojisHTML.style.display="grid";
                visible = true;
            }
            else{
                containerEmojisHTML.style.display="none";
                visible = false;
            }
        }

        function funcionSaludo(emoji){
            console.log(emoji)
        }