from fastapi import FastAPI, Query
from datetime import datetime
from mangum import Mangum

app = FastAPI(title="API Hackathon", version="1.0.0")

@app.get('/')
def index():
    return {
        'message': 'API funcionando correctamente',
        'timestamp': datetime.now().isoformat(),
        'status': 'ok'
    }

@app.get('/api/hello')
def hello(name: str = Query(default='Mundo', description='Nombre para saludar')):
    return {
        'message': f'Hola {name}!',
        'timestamp': datetime.now().isoformat()
    }

@app.get('/api/health')
def health():
    return {
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    }

# Handler para Vercel
handler = Mangum(app)

# Para desarrollo local
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=5000, debug=True)

