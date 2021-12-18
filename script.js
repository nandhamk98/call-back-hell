const button = document.getElementById("clickMe");

const wishMe = () => {
  const headerTag = document.getElementById("container");
  setTimeout(() => {
    headerTag.innerHTML = "<h1>10</h1>";
    setTimeout(() => {
      headerTag.innerHTML = "<h1>9</h1>";
      setTimeout(() => {
        headerTag.innerHTML = "<h1>8</h1>";
        setTimeout(() => {
          headerTag.innerHTML = "<h1>7</h1>";
          setTimeout(() => {
            headerTag.innerHTML = "<h1>6</h1>";
            setTimeout(() => {
              headerTag.innerHTML = "<h1>5</h1>";
              setTimeout(() => {
                headerTag.innerHTML = "<h1>4</h1>";
                setTimeout(() => {
                  headerTag.innerHTML = "<h1>3</h1>";
                  setTimeout(() => {
                    headerTag.innerHTML = "<h1>2</h1>";
                    setTimeout(() => {
                      headerTag.innerHTML = "<h1>1</h1>";
                      setTimeout(() => {
                        headerTag.innerHTML =
                          "<h1 class='wish'>Happy Independence Day</h1>";
                        document.body.style =
                          "background: linear-gradient(to bottom, rgba(242,157,75,1) 0%, rgba(255,255,255,1) 50%, rgba(62,133,39,1) 100%);";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

button.addEventListener("click", wishMe);
