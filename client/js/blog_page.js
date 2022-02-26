/* First Blog add and hide content link tag*/
/* const firstBlog = document.querySelector('#firstBlog');
const firstElementRemove = document.querySelector('#firstElementRemove'); */
/* End of First Blog add and hide content link tag*/

/* Second Blog add and hide content link tag*/
/* const secondBlog = document.querySelector('#secondBlog');
const secondElementRemove = document.querySelector('#secondElementRemove'); */
/* End of Second Blog add and hide content link tag*/



const firstBlogObject={
    1:'BKC was, and still is, the new hub for everything commercial. From Government offices to private companies, it basically has replaced areas like Ballard Pier as the epicentre of commercial activity.If commercial hubs were moving, that meant residents would have made the move at least ten years before. With property prices and rent reaching astronomical figures, most people preferred to move to the suburbs where they could have a slightly bigger space for a fraction of the cost.',
    2:'These days, most companies have their base in the suburbs. Companies like Ogilvy&Mather, IKEA, and Reliance, to name a few have made their base in various areas of suburban Mumbai.With city limits stretching everyday however, it is getting increasingly tougher to differentiate between the suburban, and the urban, and with everything happening north of Bandra, the suburban place is slowly, but surely turning into the urban place.',
    3:'However, here’s where Samarth Builders come into the picture. With substantial economical housing projects under development, Samarth Builders offer you the chance at affordable housing in the hub of suburban Mumbai!'
}

const secondBlogObject={
    1:'With the government slashing stamp duty rates along with the, the housing market has seen a resurgence nobody would have predicted with sales having tripled in the first quarter of 2021 as compared to the third quarter of 2020.With demand set to shoot up further and outstrip supply, the real estate market is predicted to see a significant price rise in the near future. ',
    2:'Here is where Samarth Builders comes into the picture. With substantial economical housing projects under development, this group is best placed to infiltrate an otherwise saturate market by offering buyers something nobody else can; Affordable housing'
}

const thirdBlogObject={
    1:'Moreover, in these times, it will be relatively easier obtaining a home loan at a much lower rate of interest as compared to the first quarter of 2020. You may also find superb budget housing at far lower rates than usual.Once you’re ready to complete the transaction, make sure you receive all the relevant paperwork from the seller, whether buying the residential space directly from the developer or from a prior owner including the deed of sale, the letter of registration, payment receipts, a letter of possession, etc.',
    2:'Once you have completed the requisite formalities, there is nothing that stands between you and your dream home! Here is where Samarth Builders comes into the picture. With substantial economical housing projects under development, this group is best placed to infiltrate an otherwise saturate market by offering buyers something nobody else can; Affordable housing.'
}

const fourthBlogObject={
    1:'Swimming pools, gym areas, movie theatres, designated restaurants, exclusive shops have all been offered as incentives for the buyer to commit to purchasing a residential in several projects. However, this move has also reached its upper limit in terms of what the seller or developer might have to offer.',
    2:'The only way anyone can penetrate a saturated, or crowded market is by offering something nobody else does, what is essentially their USP.Here is where Samarth Builders comes into the picture. With substantial economical housing projects under development, this group is best placed to infiltrate an otherwise saturate market by offering buyers something nobody else can; Affordable housing.'
}

const fifthBlogObject={
    1:'With demand set to shoot up further and outstrip supply, the real estate market is predicted to see a significant price rise in the near future. ',
    2:'Here is where Samarth Builders comes into the picture. With substantial economical housing projects under development, this group is best placed to infiltrate an otherwise saturate market by offering buyers something nobody else can; Affordable housing. '
}

const blogContentObject={
    'first':firstBlogObject,
    'second':secondBlogObject,
    'third':thirdBlogObject,
    'fourth':fourthBlogObject,
    'fifth':fifthBlogObject
}

const linkElementDetails={
    'firstBlog':'first',
    'secondBlog':'second',
    'thirdBlog':'third',
    'fourthBlog':'fourth',
    'fifthBlog':'fifth',
}

const linkRemoveElementDetails={
    'firstElementRemove':'first',
    'secondElementRemove':'second',
    'thirdElementRemove':'third',
    'fourthElementRemove':'fourth',
    'fifthElementRemove':'fifth',
}


function createPTagContent(blogObject,blogExtraDiv){
    
    for(let bg in blogObject){      
        const pElement = document.createElement('p')
        const ptextNode= document.createTextNode(blogObject[bg])
        pElement.append(ptextNode)
        blogExtraDiv.append(pElement)
    }
    /* const aElement = document.createElement('a');
    const aTextNode = document.createTextNode('Hide Content')
    aElement.append(aTextNode)
    aElement.classList.add('firstElementRemove');
    blogExtraDiv.append(aElement) */
    
}


/* 
firstBlog.addEventListener('click', function(){
    const firstBlogExtraDiv= document.querySelector('#firstBlogExtraDiv');
    const firstBlogDiv = document.querySelector('.firstBlogDiv');
    
    firstBlogExtraDiv.style.visibility='visible';
    createPTagContent(firstBlogObject,firstBlogExtraDiv);
    firstBlogDiv.append(firstBlogExtraDiv);
    this.style.visibility='hidden';
    firstElementRemove.style.visibility='visible';
})

firstElementRemove.addEventListener('click',function(){
    const firstBlogExtraDiv= document.querySelector('#firstBlogExtraDiv');
    firstBlogExtraDiv.style.visibility='hidden';
    this.style.visibility='hidden';
    firstBlog.style.visibility='visible';

    firstBlogExtraDiv.innerHTML='';
}) */

/********************************************************************************************** */

function addContent(finalValue,selectedLinkElement,blogObject){
    const blogExtraDivVariable = finalValue+'BlogExtraDiv';
    const blogDivVariable =finalValue+'BlogDiv';
    const elementRemove = finalValue+'ElementRemove';

    const BlogExtraDiv= document.querySelector(`#${blogExtraDivVariable}`);
    const BlogDiv = document.querySelector(`.${blogDivVariable}`);
    const bloglinkElement = document.querySelector(`#${selectedLinkElement}`)
    const blogRemoveLinkElement =document.querySelector(`#${elementRemove}`)
    
    BlogExtraDiv.style.visibility='visible';
    createPTagContent(blogObject,BlogExtraDiv);
    console.log(BlogDiv.childNodes)
    BlogDiv.insertBefore(BlogExtraDiv,BlogDiv.childNodes[11])
    //BlogDiv.append(BlogExtraDiv);
    bloglinkElement.style.visibility='hidden';
    blogRemoveLinkElement.style.visibility='visible';
}

function callShowElement(selectedElement){
    let finalValue=''
    for (let value in linkElementDetails){
        if (value===selectedElement){
            console.log(selectedElement)
            finalValue=linkElementDetails[value]
        }
    }

    let blogObjectName = {}
    for(let obj in blogContentObject){
        if(obj===finalValue){
            blogObjectName=blogContentObject[obj]
        }
    }
    console.log(blogObjectName)
    addContent(finalValue,selectedElement,blogObjectName);
}

function callHideElement(selectedElement){
    let finalValue=''   
    for (let value in linkRemoveElementDetails){
        if (value===selectedElement){
            console.log(selectedElement)
            finalValue=linkRemoveElementDetails[value]
        }
    }
    removeContent(finalValue,selectedElement)
}

function removeContent(finalValue,selectedLinkElement){
    const blogExtraDivVariable = finalValue+'BlogExtraDiv';
    const blogElementVariable =finalValue+'Blog';

    const BlogExtraDiv= document.querySelector(`#${blogExtraDivVariable}`);
    const bloglinkElement = document.querySelector(`#${selectedLinkElement}`);
    const elementBlog = document.querySelector(`#${blogElementVariable}`);


    BlogExtraDiv.style.visibility='hidden';
    bloglinkElement.style.visibility='hidden';
    elementBlog.style.visibility='visible';

    BlogExtraDiv.innerHTML='';
}


window.addEventListener("click", (event) => {
    const selectedElement =event.srcElement.id;
    const flagValue = selectedElement.includes('Remove');
    
    if(flagValue){
        callHideElement(selectedElement);
    }
    else{
        callShowElement(selectedElement);
    }

  });