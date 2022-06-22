import './LoadingIcon.css';
export default function LoadingIcon({ active }) {
  return (
    <div className={`LoadingIconContainer ${active ? 'active' : 'inactive'}`}>
      <div className='LoadingIcon'>
        <div></div>
        <div></div>
      </div>
      <br />
      <p className='LoadingText'>wait for it...</p>
    </div>
  );
}
