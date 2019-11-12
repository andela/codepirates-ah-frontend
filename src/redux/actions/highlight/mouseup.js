import rangy from 'rangy/lib/rangy-core';
import 'rangy/lib/rangy-highlighter';
import 'rangy/lib/rangy-classapplier';
import 'rangy/lib/rangy-textrange';
import 'rangy/lib/rangy-serializer';

const mouseupHandler = body => {
  const parent = document.querySelector('.article-part');
  rangy.init();
  let userSelection;
  if (window.getSelection) {
    userSelection = window.getSelection();
  } else if (document.selection) {
    // for Opera!
    userSelection = document.selection.createRange();
  }
  let selectedText = userSelection;
  if (userSelection.text) selectedText = userSelection.text;
  const getRangeObject = selectionObject => {
    if (selectionObject.getRangeAt) return selectionObject.getRangeAt(0);
    // Safari!
    const range = document.createRange();
    range.setStart(parent, selectionObject.anchorOffset);
    range.setEnd(selectionObject.focusNode, selectionObject.focusOffset);
    return range;
  };
  const range = getRangeObject(userSelection);
//   const par = range.startContainer.parentNode;
  //   console.log('******', par.offsetLeft);
  //   console.log(range);
//   const str = `${parent.innerHTML.toString()}`.replace('"', '"') / g;
  //   console.log(rangy.serializeSelection(rangy.getSelection(), false, parent));
  //   const selection = rangy.getSelection();
  //   console.log(parent);
  //   const limits = rangy.serializeSelection(selection, false, parent);
//   console.log(sel);
//   console.log(body.indexOf(sel));
  //   rangy.deserializeSelection();
    let newBody = body.replace(userSelection, `<span style=\"background: rgb(86, 156, 214);\">${userSelection}</span>&nbsp;`);
    // console.log({body});
    // console.log({ newBody });
    return newBody
};

export default mouseupHandler;
