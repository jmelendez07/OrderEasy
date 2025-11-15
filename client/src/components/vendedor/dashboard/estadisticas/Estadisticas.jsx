import './Estadisticas.css';

function Estadisticas() {
  
  return (
    <div className="stats-content">
      <iframe className='powerbiIframe' title="OrderEasy" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNDBlMzc3YTMtNTk3OS00ODA5LTkzNzctYjZiN2FkMzhmOGY2IiwidCI6IjlkMTJiZjNmLWU0ZjYtNDdhYi05MTJmLTFhMmYwZmM0OGFhNCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}

export default Estadisticas;
