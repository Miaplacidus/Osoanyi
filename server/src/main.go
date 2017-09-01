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
    Time       string
}

type Runs []Run

func main(){
  runs := Runs{
          Run{Level: "6 min mile", Duration: "1.5 hours", Time: "2:00 pm"},
          Run{Level: "15 min mile", Duration: "Forever", Time: "6:30 pm"}
      }

  http.HandleFunc("/", func (writer http.ResponseWriter, reader *http.Request)  {
    json.NewEncoder(writer).Encode(runs)
  })

  fmt.Println(http.ListenAndServe(":3000", nil))
}
