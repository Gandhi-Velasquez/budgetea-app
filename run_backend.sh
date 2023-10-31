#!/bin/bash

# Check if the virtual environment is activated
if [[ -z "${VIRTUAL_ENV}" ]]; then
    echo "Activating virtual environment..."
    source venv/bin/activate
fi

# Run the backend script
python3 backend/index.py

