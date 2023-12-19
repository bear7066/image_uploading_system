// let queued_images_array = [],
//             saved_form = document.querySelector("#save_form"),
//             queued_form = document.querySelector("#queued_form"),
//             saved_div = document.querySelector(".saved_div"),    
//             queued_div = document.querySelector(".queued_div"),
//             input_div = document.querySelector(".input_div"),
//             input = document.querySelector(".input_div input"),
//             server_message = document.querySelector(".server_message"),
//             deleted_images_array = [];

//             // Saved in server images

//             // Queued in fronted images
//             input.addEventListener("change", ()=> {
//                 const files = input.files
//                 for(let i = 0; i < files.length; i++){
//                     queued_images_array.push(files[i])
//                 }
//                 queued_form.reset()
//                 display_queue_images()
//             })

//             input_div.addEventListener("drop", (e) =>{
//                 e.preventDefault()
//                 const files = e.data_transfer.files
//                 for(let i = 0; i < files.length; i++){
//                     if(!files[i].type.match("image")) continue
//                     if(queued_images_array.every(image => image.name !== files[i].name)) queued_images_array.push(files[i])
//                 } 
//                 display_queue_images()
//             })

//             function display_queue_images(){
//                 let image = ""

//             }
