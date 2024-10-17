
## Original Code 
// BOXES RESPONDING TO SCROLL
const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const boxIndex = sections.value.indexOf(sectionId);
          boxes.value[boxIndex].classList.add('rotated');

          if (sectionId === 'stack') {
            // Change the color of all boxes when stack section is intersected
            boxes.value.forEach((box) => {
              box.style.backgroundColor = '#fbbf24'; // change to secondary color
            });
            boxes.value[boxIndex].style.border = '2px solid #fbbf24';
            boxes.value[boxIndex].style.backgroundColor = 'transparent';
          } else {
            // Reset the color of all boxes when other sections are intersected
            boxes.value.forEach((box) => {
              box.style.backgroundColor = ''; // Reset to default color
              box.style.border = '';
            });
          }
          boxes.value[boxIndex].classList.add('rotated');
        } else {
          const sectionId = entry.target.id;
          const boxIndex = sections.value.indexOf(sectionId);
          boxes.value[boxIndex].classList.remove('rotated');
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.value.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    observer.observe(section);
  });
};

## Refactored

// Helper function to update box styles for the 'stack' section
const applyStackStyles = (boxIndex) => {
  boxes.value.forEach((box) => {
    box.style.backgroundColor = '#fbbf24'; // secondary color
  });
  boxes.value[boxIndex].style.border = '2px solid #fbbf24';
  boxes.value[boxIndex].style.backgroundColor = 'transparent';
};

// Helper function to reset box styles
const resetBoxStyles = () => {
  boxes.value.forEach((box) => {
    box.style.backgroundColor = ''; // Reset to default
    box.style.border = '';
  });
};

// BOXES RESPONDING TO SCROLL
const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        const boxIndex = sections.value.indexOf(sectionId);

        if (entry.isIntersecting) {
          boxes.value[boxIndex].classList.add('rotated');

          if (sectionId === 'stack') {
            applyStackStyles(boxIndex);
          } else {
            resetBoxStyles();
          }
        } else {
          boxes.value[boxIndex].classList.remove('rotated');
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.value.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    observer.observe(section);
  });
};