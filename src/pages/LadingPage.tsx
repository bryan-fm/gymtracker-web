import { useMediaQuery } from '@mantine/hooks'
import background from '../assets/background.jpg'
import training from '../assets/traning.png'

export function LandingPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div>
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundImage: `url(${background})`,
          minHeight: '90vh',
          backgroundSize: isMobile ? '100% auto' : 'cover',
          backgroundRepeat: isMobile ? 'repeat-y' : 'no-repeat',
          backgroundPosition: isMobile ? 'top center' : 'center',
          filter: 'blur(4px) brightness(0.5)',
        }}
      />
      <div
        style={{
          zIndex: 2,
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          fontSize: '1.5rem',
          bottom: 0,
        }}
      >
        <div style={{ marginTop: '10px' }}>
          <h1>Gym Tracker</h1>
        </div>
        <p>Organize seus treinos, acompanhe seu progresso e evolua na academia.</p>
        <div
          style={{
            marginTop: '10px',
            backgroundColor: 'white',
            height: isMobile ? '0px' : '410px',
            opacity: 0.7,
            borderRadius: '25px',
            color: 'black',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'space-around',
              padding: isMobile ? '0px' : '10px',
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <div
              style={{
                width: isMobile ? '100%' : '33%',
                maxHeight: '50%',
                height: '50%',
                padding: '10px',
                paddingTop: '0px',
                border: '1px solid lightblue',
                borderRadius: '25px',
              }}
            >
              <h3>Registro de Treinos</h3>
              {!isMobile ? (
                <p style={{ maxHeight: '20px' }}>Adicione e gerencie seus treinos facilmente.</p>
              ) : null}
              <img
                src={training}
                alt="Dumbbell Icon"
                height={isMobile ? '100px' : '200px'}
                style={{ opacity: 1, marginTop: '20px' }}
              />
            </div>
            <div
              style={{
                width: isMobile ? '100%' : '33%',
                maxHeight: '50%',
                height: '50%',
                padding: '10px',
                paddingTop: '0px',
                border: '1px solid lightblue',
                borderRadius: '25px',
              }}
            >
              <h3>Cadastro de Alimentos e Refeições</h3>
              {!isMobile ? (
                <p style={{ maxHeight: '20px' }}>Monitore seu desempenho ao longo do tempo.</p>
              ) : null}
              <img
                src={training}
                alt="Dumbbell Icon"
                height={isMobile ? '100px' : '200px'}
                style={{ opacity: 1, marginTop: '20px' }}
              />
            </div>
            <div
              style={{
                width: isMobile ? '100%' : '33%',
                maxHeight: '50%',
                height: '50%',
                padding: '10px',
                paddingTop: '0px',
                border: '1px solid lightblue',
                borderRadius: '25px',
              }}
            >
              <h3>Calculo de Calorias</h3>
              {!isMobile ? (
                <p style={{ maxHeight: '20px' }}>
                  Acompanhe sua ingestão calórica e alcance suas metas.
                </p>
              ) : null}
              <img
                src={training}
                alt="Dumbbell Icon"
                height={isMobile ? '100px' : '200px'}
                style={{ opacity: 1, marginTop: '20px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
