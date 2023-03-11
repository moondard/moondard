document.querySelector('.close_button').onclick = closeBlock;
function closeBlock () {
    let block = document.querySelector('.email');
    if (!block) {
        return;
    }
    return block.hidden= !block.hidden;
}