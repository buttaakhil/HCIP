import pickle
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

class Features(BaseModel):
    features: List[float]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the ML Model API using FastAPI!"}

@app.post("/predict")
def predict(data: Features):
    features = data.features
    prediction = model.predict([features])
    return {"prediction": prediction.tolist()}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, debug=True)
