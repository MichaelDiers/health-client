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
  switch (status) {
    case 'down':
      text = 'error';
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
        <div>{counter}</div>
      </>
    )
  }

  return (
    <>
      <div className={`status-${status}`}>{keyText}</div>
      <div className={`status-${status} material-symbols-outlined`}>
        <span className='material-symbols-outlined'>{text}</span>
      </div>
    </>
  )
}
