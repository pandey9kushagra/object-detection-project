function bs(){

    window.location="index.html"
}

img= ""
object = []
status = ""

function preload(){

   img = loadImage("tv.jpg")
}

function setup(){

    canvas = createCanvas(600, 450)
    canvas.position(480, 250)
     
    objectdct = ml5.objectDetector("cocossd", modalloaded)
    document.getElementById("status").innerHTML = "Status : Object detecting"

}

function modalloaded(){

    console.log("Modal is loaded")
    status = true
    objectdct.detect(img, gotresult)
}

function gotresult(e, r){
     
    if(e){

        console.error(e)
    }

    console.log(r)
    object = r

}



function draw(){

    image(img ,0 ,0 ,680 ,500)

    if(status != "" ){
        document.getElementById("status").innerHTML= "Status : Object is not detected"
        document.getElementById("obj").innerHTML="There are "+object.length +" big object in the image from which cocssd detected 2 objects"

        for(i=0; i<object.length; i++){

             fill("yellow")
             name = object[i].label
             confi = floor(object[i].confidence*100)
             text(name+" "+confi+"%", object[i].x + 15, object[i].y + 15) 
             
             noFill()

             stroke( "blue"  )
             rect(object[i].x, object[i].y, object[i].width, object[i].height)

        }

        
    }
}