import psutil
import time
from datetime import datetime

# Thresholds
CPU_THRESHOLD = 80  # in %
MEMORY_THRESHOLD = 80  # in %

LOG_FILE = "system_health.log"

def log_alert(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    final_message = f"[{timestamp}] ALERT: {message}"
    
    # Print to console
    print(final_message)
    
    # Write to log file
    with open(LOG_FILE, "a") as file:
        file.write(final_message + "\n")

def check_cpu():
    cpu_usage = psutil.cpu_percent(interval=1)
    if cpu_usage > CPU_THRESHOLD:
        log_alert(f"High CPU Usage: {cpu_usage}%")

def check_memory():
    memory = psutil.virtual_memory()
    memory_usage = memory.percent
    if memory_usage > MEMORY_THRESHOLD:
        log_alert(f"High Memory Usage: {memory_usage}%")

def main():
    print("Starting System Health Monitoring...\n")
    
    while True:
        check_cpu()
        check_memory()
        
        # Check every 5 seconds
        time.sleep(5)

if __name__ == "__main__":
    main()