export function Status({
  keyText,
  status,
  isWaiting = false,
  counter,
}: {
  keyText: string,
  status: string,
  isWaiting?: boolean,
  counter?: number,
}) {
  let text;
  let cssClass = '';
  switch (status) {
    case 'down':
    case 'error':
      text = 'error';
      cssClass = 'status-error';
      break;
    case 'ok':
      text = 'done_all';
      break;
    case 'up':
      text = 'check';
      break;
    default:
      text = status;
      break;
  }

  if (isWaiting) {
    return (
      <>
        <div>{keyText}</div>
        <div>{counter ? `${counter} sec` : ''}</div>
      </>
    )
  }

  return (
    <>
      <div className={cssClass}>{keyText}</div>
      <div className={`${cssClass} material-symbols-outlined`}>
        <span className='material-symbols-outlined'>{text}</span>
      </div>
    </>
  )
}
