function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}