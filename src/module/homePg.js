
export default homePg;


function homePg() {
    const mainDiv = document.createElement('div');
    
    mainDiv.classList.add(`content`)
  
    mainDiv.appendChild(title())
    mainDiv.appendChild(middleContent())
    mainDiv.appendChild(lastContent()) 
    return mainDiv;
  }


function title () {
    const title = document.createElement("span");
    title.textContent = `Duck Restaurant`;
    title.classList.add('title'); 
    return title;
}

function middleContent () {
    const content = document.createElement('div');

    const img1 = document.createElement('img');
    img1.src = '../image/images.jpg';
    img1.setAttribute('style', 'style="width:  30%;');

    const text = document.createElement('div');
    text.textContent= `This restaurant will give the funny experience to eat between the beautiful DUCKS and and pet them. 
    While eating our delicious chicken and beef`;

    content.classList.add('middleContent')
    content.appendChild(img1);
    content.appendChild(text);
    return content
}

function lastContent () {
    const content = document.createElement('div');

    const section01 = document.createElement('section');
    section01.innerHTML= `<b>SATURDAY<br>SUNDAY</b><br>MONDAY<br>TUESDAY<br>WEDNESDAY<br>THUESDAY<br><i>FRIDAY</i>`;

    const section02 = document.createElement('section');
    section02.innerHTML=`<b>9am-10pm<br>9am-10pm<br></b>11am-5pm<br>11am-5pm<br>11am-5pm<br>11am-5pm<br><i>clossed</i>`;

    content.classList.add('lastContent')
    content.appendChild(section01);
    content.appendChild(section02);

    return  content;
}