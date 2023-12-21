
const MAX_RATING = 5
function Star(rating, parentNode){
  const container = document.createElement("div");
  container.classList.add('rating-container');

  for(let i = 0;i<MAX_RATING;i++){
    const star = document.createElement('img');
    star.setAttribute("src","img/star.svg")
    star.setAttribute('data-index',String(i));
    star.classList.add('star-icon');
    if(i>rating-1){
      star.classList.add('faded');
    }
    container.appendChild(star);
    star.addEventListener('mouseover',function (e) {
      const hoveredElementIndex = i;
      const childNodes = container.childNodes;

        childNodes.forEach((node,index)=>{
          node.classList.add('faded')
          if(index<=Number(hoveredElementIndex))
            node.classList.add('hovered')

        })
    });
    star.addEventListener('mouseleave',function (e) {
      const hoveredElementIndex = i;
      const childNodes = container.childNodes;
      childNodes.forEach((node,index)=>{
        if(index>=Number(hoveredElementIndex))
          node.classList.remove('hovered')
      })
    });

    star.addEventListener('click',function (e){
      const clickedElementIndex = i;
      rating = Number(i)+1;
      container.childNodes.forEach((node,index)=>{
        if(index<=clickedElementIndex){
          node.classList.remove('faded')
        }else{
          node.classList.add('faded')
        }
      })
    })

    container.addEventListener('mouseleave',function (e){
      e.target.childNodes.forEach((node, index)=>{
        node.classList.remove('hovered','faded');
        if(index>rating-1){
          node.classList.add('faded')
        }

      })
    })
  }
  parentNode.appendChild(container);
}


export {Star}
