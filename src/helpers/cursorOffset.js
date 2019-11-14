/* eslint-disable no-cond-assign */
export default function cursorIndexFrom(element) {
  let cursorOffset = 0;
  const doc = element.ownerDocument || element.document;
  const win = doc.defaultView || doc.parentWindow;
  let sel;
  let range;
  const pos = window
    .getSelection()
    .getRangeAt(0)
    .getClientRects()[0];
  if (typeof win.getSelection !== 'undefined') {
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      range = win.getSelection().getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      cursorOffset = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type !== 'Control') {
    range = sel.createRange();
    const preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint('EndToEnd', range);
    cursorOffset = preCaretTextRange.text.length;
  }
  return {
    end: cursorOffset,
    start: cursorOffset - sel.toString().length,
    top: pos.top,
    left: pos.left,
  };
}
