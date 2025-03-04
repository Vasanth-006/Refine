export const fetchFigmaImage = async (nodeId: string) => {
    const FILE_ID = "xHZMZgguFccb9Go5iT9Alj"; // Your Figma File ID
    const API_KEY = import.meta.env.VITE_FIGMA_API_KEY;
  
    const figmaUrl = `https://api.figma.com/v1/images/${FILE_ID}?ids=${nodeId}`;
   console.log("figma_image-------?",figmaUrl)
    const response = await fetch(figmaUrl, {
      headers: { "X-Figma-Token": API_KEY },
    });
  
    const data = await response.json();
    return data.images[nodeId];
  };
  