let appearAndDisappear = require('./appearAndDisappear');
exports.loading = {
    start: (callback = () => {}) => {
        // Create Loading Layer
        let loadingLayer = document.createElement("div");
        loadingLayer.id = "zcapt-loadingLayer";
        loadingLayer.className = "zcapt-loading";
        loadingLayer.innerHTML = "<div></div><div></div>";
        appearAndDisappear.appear(loadingLayer,callback);
        document.getElementById("zcapt-frame").appendChild(loadingLayer);

        setTimeout(() => {  // Loading Time out

            // Make a large refresh icon
            let refreshIcon = "<path fill=\"#aaa\" d=\"M427.408,19.697c-7.803-3.23-14.463-1.902-19.986,3.999l-37.116,36.834C349.94,41.305,326.672,26.412,300.5,15.848C274.328,5.285,247.251,0.003,219.271,0.003c-29.692,0-58.052,5.808-85.08,17.417c-27.03,11.61-50.347,27.215-69.951,46.82c-19.605,19.607-35.214,42.921-46.824,69.949C5.807,161.219,0,189.575,0,219.271c0,29.687,5.807,58.05,17.417,85.079c11.613,27.031,27.218,50.347,46.824,69.952c19.604,19.599,42.921,35.207,69.951,46.818c27.028,11.611,55.388,17.419,85.08,17.419c32.736,0,63.865-6.899,93.363-20.7c29.5-13.795,54.625-33.26,75.377-58.386c1.52-1.903,2.234-4.045,2.136-6.424c-0.089-2.378-0.999-4.329-2.711-5.852l-39.108-39.399c-2.101-1.711-4.473-2.566-7.139-2.566c-3.045,0.38-5.232,1.526-6.566,3.429c-13.895,18.086-30.93,32.072-51.107,41.977c-20.173,9.894-41.586,14.839-64.237,14.839c-19.792,0-38.684-3.854-56.671-11.564c-17.989-7.706-33.551-18.127-46.682-31.261c-13.13-13.135-23.551-28.691-31.261-46.682c-7.708-17.987-11.563-36.874-11.563-56.671c0-19.795,3.858-38.691,11.563-56.674c7.707-17.985,18.127-33.547,31.261-46.678c13.135-13.134,28.693-23.555,46.682-31.265c17.983-7.707,36.879-11.563,56.671-11.563c38.259,0,71.475,13.039,99.646,39.116l-39.409,39.394c-5.903,5.711-7.231,12.279-4.001,19.701c3.241,7.614,8.856,11.42,16.854,11.42h127.906c4.949,0,9.23-1.807,12.848-5.424c3.613-3.616,5.42-7.898,5.42-12.847V36.55C438.542,28.558,434.84,22.943,427.408,19.697z\"/>";
            let refreshImg = document.createElementNS("http://www.w3.org/2000/svg","svg");
            refreshImg.id = "zcapt-largeRefresh";
            refreshImg.innerHTML = refreshIcon;
            refreshImg.setAttribute("viewBox","0 0 438.542 438.542");
            refreshImg.setAttribute("xml:space","preserve");
            refreshImg.onclick = () => {
                require("./rebuilt").everything();
            };

            // Replace the loading animation by a large refresh icon.
            loadingLayer.innerHTML = "";
            loadingLayer.appendChild(refreshImg);
            loadingLayer.classList.remove("zcapt-loading");
            loadingLayer.classList.add("zcapt-largeRefresh");
        }, 20000);
    },
    end: (callback = () => {}) => {
        // Remove Loading Layer
        appearAndDisappear.disappear(document.getElementById("zcapt-loadingLayer"),callback);
    }
};