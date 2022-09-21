export function Status({ status, global = false }: { status: string, global?: boolean }) {
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
  return (
    <div className={`status-${status} material-symbols-outlined`}>
      <span className='material-symbols-outlined'>{text}</span>
    </div>
  )
}
