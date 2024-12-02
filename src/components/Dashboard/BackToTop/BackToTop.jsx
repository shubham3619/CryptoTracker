import { MdArrowCircleUp } from "react-icons/md";

function BackToTop() {
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div>
      <MdArrowCircleUp
        className="fixed bottom-8 right-8 flex justify-center items-center w-10 h-10 text-blue-500 cursor-pointer"
        id="myBtn"
        onClick={() => topFunction()}
      />
    </div>
  );
}

export default BackToTop;
