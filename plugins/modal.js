function createModalWindow(options) {
    const modalWindow = document.createElement("div")
    modalWindow.classList.add("block")
    modalWindow.insertAdjacentHTML("afterbegin", `
    <div class="opacity">
        <div class="block-modal">  
            <div class="modal-title">
                <div class="modal-text"><b>Modal window</b></div>
                <div class="modal-close"><b>&times</b></div>
            </div>
            <div class="modal-body">
                <p class="modal-body__text">Lorem ipsum dolor sit.</p>
                <p class="modal-body__text">Lorem ipsum dolor sit.</p>
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

plugin.modal = function(options) {
    const animateSpeed = 200
    const ss = createModalWindow(options)
    let closing = false

    return {
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
        destroy() {}
    }
}
