package main

import (
  "fmt"
  "net/http"
  "time"
  "encoding/json"
)

type Run struct {
    Level      string
    Duration   string
    Time       time.Time
}

type Runs []Run

func main(){
  runs := Runs {
            Run {Level: "6 min mile", Duration: "1.5 hours", Time: time.Now()},
            Run {Level: "15 min mile", Duration: "Forever", Time: time.Now()},
          }

  http.HandleFunc("/api", func (writer http.ResponseWriter, reader *http.Request)  {
    writer.Header().Set("Access-Control-Allow-Origin", "*")
    writer.Header().Set("Content-Type", "application/json, text/plain")
    writer.Header().Set("Access-Control-Allow-Methods", "GET")

    json.NewEncoder(writer).Encode(runs)
  })

  fmt.Println(http.ListenAndServe(":3000", nil))
}
