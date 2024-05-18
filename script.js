const button = document.getElementById('myButton');
const content = document.getElementById('content');

button.addEventListener('click', () => {
  content.style.display = 'block';
  button.style.display = 'none'; // Hide the button
  document.body.style.backgroundImage = "url('https://cdns.klimg.com/resized/800x400/p/headline/135-nama-nama-kucing-betina-dari-abjad--c7c5e6.jpg')"; // Change background image
  
  // Start bubble generation after text appears
  setTimeout(() => {
    startBubbleAnimation();
  }, 3500); // Match this duration to the typewriter animation duration
});

function startBubbleAnimation() {
  const bubbleContainer = document.getElementById('bubble-container');

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.innerText = 'MY LOVE FIZZAH❤️'; // Use the heart emoji
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 2 + 3 + 's'; // random duration between 3s to 5s

    bubbleContainer.appendChild(bubble);

    // Remove the bubble once the animation is complete
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }

  // Generate bubbles at intervals
  setInterval(createBubble, 500);
}
