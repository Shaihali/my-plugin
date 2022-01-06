//Функция которая непосредственно создает верстку модального окна и вставляет готовый html код в DOM дерево

function createModalWindow(options) {
    const modalWindow = document.createElement("div")
    modalWindow.classList.add("block")
    modalWindow.insertAdjacentHTML("afterbegin", `
    <div class="opacity">
        <div class="block-modal" style="width: ${options.width || DEFAULT_WIDTH}">  
            <div class="modal-title">
                <div class="modal-text"><b>${options.title || ""}</b></div>
                ${options.closable ? `<div class="modal-close" data-closed="true">&times</div>`: ""}
            </div>
            <div class="modal-body">
                ${options.content || ""}
            </div>
            <div class="buttom">
                <button>OK</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modalWindow)

    return modalWindow

}


/* Plugin это объект который был создан пустым в файле Base.js и теперь мы тут также имеем к нему доступ.
Раз мы имеем доступ к Объекту Plugin мы можем создаем к нему функцию modal(он же метод) которая будет 
являтся также функцией*/

// Это тот же самый код, выаолняет тоже самое, но выглядит простым и понятным
// const plugin = {
//     // modal: function(options) {} //как вариант создании функции.

//     modal: (options) => {
//         const animateSpeed = 200
//         const ss = createModalWindow(options)
//         let closing = false
    
//         const obj = {
//             open: () => {!closing && ss.classList.add("open")},
//             close: () => {
//                         closing = true
//                         ss.classList.remove("open")
//                         ss.classList.add("hide")
//                         setTimeout(() => {
//                             ss.classList.remove("hide")
//                             closing = false
//                         }, animateSpeed)},
//         }
    
//         ss.addEventListener("click", (event) => { //когда происходит событие которые мы указали, браузер создает объект-события и записывает в него детали этого события. и передает этот объект качестве аргумента функции.
//             if(event.target.dataset.closed || (event.path[0].value == "")) {
//                 obj.close()
                
//             }
//         })
    
//         return obj
//     }
// }

plugin.modal = function(options) {

    const animateSpeed = 200
    const ss = createModalWindow(options)
    let closing = false

    const obj = {
        open() {
            !closing && ss.classList.add("open")
        },
        close() {
            closing = true
            ss.classList.remove("open")
            ss.classList.add("hide")
            setTimeout(() => {
                ss.classList.remove("hide")
                closing = false
            }, animateSpeed)
        },
    }

    ss.addEventListener("click", (event) => {
        if(event.target.dataset.closed || (event.path[0].value == "")) {
            obj.close()

        }
    })

    return obj
}

