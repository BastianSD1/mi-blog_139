img= "";
status="";
objects=[];
function preload(){
img =loadImage('dog_cat.jpg')


}
function setup(){
canvas= createcanvas(640,420)
canvas.center()
objectDetector= ml5.objectDetector
image(img,0,0,640,420);(cocacolastic,modeloaded);
document.getElementById("status").innerHTML="estado: detectando objetos";


}
function modeloaded(){
    console.log("modelo crasheado(te trolle si esta cargado)");
    status = true ;
    objectDetector.detect(img, gotResult);
    
    
        }
function draw(){


text("dog",45,75);
fill(250,0,0);
nofill();
stroke(255,0,0);
rect(30,60,450,350); 

text("cat",320,120);
fill(255,0,0);
nofill();
stroke(255,0,0);
rect(300,90,270,320)   
}

    function draw(){
        image(video,0,0,380,380)
    
        if(status!=""){
            for(i = 0;i<objects.lenght;i++) {
                document.getElementById("status").innerHTML="Estado de los objetos detectados";
                document.getElementById("number_of_objects").innerHTML="numero de los objetos detectados"+object.lenght;
                
                ;
                fill(r,g,b);
                percent=floor(objects[i].confidence * 100);
                text(objects[i].label+" "+percent+"%",objects[i].x + 15, objects[i].y+15);
                nofill();
                stroke(r,g,b);
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                
                
                
                }
        r=  random(255);
        g=  random(255);
        b=  random(255);
        
        objectDetector(960*1280)
        objectDetector.detect(video, gotResult);
    }
    }