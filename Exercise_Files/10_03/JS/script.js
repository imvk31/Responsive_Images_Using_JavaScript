const IMAGES = document.querySelectorAll('img');
//console.log(IMAGES);

const SIZES ={
	showcase: "100vw",
	reason: "(max-width: 700px) 100vw, 372px",
	feature: "(max-width: 700px) 100vw, 558px",
	story: "(max-width: 700px) 100vw, 670"
};

function makeSrcset(imgSrc)
{
	let markup =[];
	let width = 400;

	for(let i=0; i<5; i++)
	{
		markup[i] = imgSrc+ "-" +width+".jpg "+width+'w';
		width+=400;
	}

	return markup.join();
}

for(let i=0; i<IMAGES.length; i++)
{
	imgSrc = IMAGES[i].getAttribute('src');
	imgSrc = imgSrc.slice(0,-8);
	//console.log(imgSrc);

	let srcSet = makeSrcset(imgSrc);
	console.log(srcSet);
	IMAGES[i].setAttribute("srcSet", srcSet);
    
	type = IMAGES[i].getAttribute("data-type");
	//console.log(type); 

	let sizes = SIZES[type];
	IMAGES[i].setAttribute("sizes", sizes);
	console.log(sizes); 

}