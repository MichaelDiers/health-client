export function Status({
  keyText,
  status,
  isWaiting = false,
  counter,
  isSubResult = false,
}: {
  keyText: string,
  status: string,
  isWaiting?: boolean,
  counter?: number,
  isSubResult?: boolean,
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
        <div className={isSubResult ? 'sub-result' : ''}>{keyText}</div>
        <div>{counter ? `${counter} sec` : ''}</div>
      </>
    )
  }

  return (
    <>
      <div className={`cssClass ${isSubResult ? 'sub-result' : ''}`}>{keyText}</div>
      <div className={`${cssClass} material-symbols-outlined`}>
        <span className='material-symbols-outlined'>{text}</span>
      </div>
    </>
  )
}
