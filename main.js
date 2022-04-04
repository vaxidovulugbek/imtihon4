
let massiv = [
  {
    id:1,
    media:[
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
    ],
  },
  {
    id:2,
    media:[
       "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    ],
  },

  {
    id:3,
    media:[
       "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
    ],
  },

  {
    id:4,
    media:[
       "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    ],
  },
]


let ellist = document.querySelector("#lists")
let contai = document.querySelector("#contai")



let count2 = 1

massiv.forEach((item) => {
  let li = document.createElement("li")
  li.className = "item"
  li.id = count2
  // console.log(li.id);
  // console.log(item);
   li.innerHTML = 
    `
    <img id="stirisimg" class="storis-img2" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Bonsai_IMG_6426.jpg" alt="">
    <button id="lb" class="leftbx"><i class='bx bx-left-arrow-circle'></i></button>
       <ul class="list-chizi">
         <li class="chiz"></li>
         <li class="chiz"></li>
       </ul>
        <div class="item__info">
        <div class="avatar">
          <img class="storis-img" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Bonsai_IMG_6426.jpg" alt="">
          <h2 class="title">Ulugbek</h2>
        </div>
        <ul class="icons">
          <li class="icons__item"><i class='bx bx-play'></i></li>
          <li class="icons__item"><i class='bx bxs-user-voice' ></i></li>
          <li class="icons__item"><i class='bx bx-dots-horizontal-rounded' ></i></li>
        </ul>
      </div>
      <img id="glavniimg" class="glavni-img" src="${item.media[0]}" alt="">
      <form class="form">
        <input class="input" type="text" placeholder="search">
        <i class='bx bxl-telegram' ></i>
      </form>   
      <button id="rb" class="rightbx"><i class='bx bx-right-arrow-circle'></i></button>
    `
    ellist.appendChild(li)
    let glavniimg = document.querySelector("#glavniimg")
    let stirisimg = document.querySelector("#stirisimg")
    let storissimg = document.querySelectorAll(".storis-img2")
    let rrbtn = document.querySelectorAll(".rightbx")

    li.addEventListener("click" ,(e) => {
      e.preventDefault()
      // li.classList.add("heightimg")
      console.log(stirisimg);
      contai.classList.add("margintop")
      
      for (let i = 0 ; i< storissimg.length;i++) {
        storissimg[i].className = "dn2"
      }
      let elItems = ellist.querySelectorAll("li");
      elItems[0].classList.add("heightimg");
      let count = 0;
      elItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          item.classList.add("ck");
          item.classList.add("transition")
          btncheck();
        });
      });
      function btncheck() {
        elItems.forEach((item) => {
          if(item.classList.contains("ck")){
            item.classList.add("heightimg");
            // item.classList.add("transition")
            item.classList.remove("ck");
          } else{
            item.classList.remove("heightimg")
          }
        });
      }
    })   
        let bigrightbtn = document.querySelectorAll(".right-btn")
        let leftbtn = document.querySelectorAll(".left-btn")
        let count1 = 0;

        bigrightbtn.forEach((el, index) => {
          let n = index
          if (n == 0) {
            el.addEventListener('click', () => {
              count1++;
              if (count1 == 1) {
                ellist.style.transform = 'translateX(20%)';
                ellist.classList.add("transition")
                // li.classList.add("heightimg")
              } else if (count1 == 2) {
                ellist.style.transform = 'translateX(40%)';
              } else if (count1 == 3) {
                ellist.style.transform = 'translateX(60%)';
              } else if (count1 == 4) {
                ellist.style.transform = 'translateX(80%)';
              }
              else if (count1 == 4) {
                ellist.style.transform = 'translateX(100%)';
              }
              else {
                ellist.style.transform = 'translateX(0)';
                count1 = 0
              }
            })
          }
        })
        leftbtn.forEach((el, index) => {
          let n = index
          if (n == 0) {
            el.addEventListener('click', () => {
              count1++;
              if (count1 == 1) {
                ellist.style.transform = 'translateX(-20%)';
              } else if (count1 == 2) {
                ellist.style.transform = 'translateX(-40%)';
              } else if (count1 == 3) {
                ellist.style.transform = 'translateX(-60%)';
              } else if (count1 == 4) {
                ellist.style.transform = 'translateX(-80%)';
              }
              else if (count1 == 4) {
                ellist.style.transform = 'translateX(-100%)';
              }
              else {
                ellist.style.transform = 'translateX(0)';
                count1 = 0
              }
            })
          }
       })
})
let closebtn = document.querySelector("#closebtn")
closebtn.addEventListener("click", (e) => {
  contai.classList.add("dn")
})


