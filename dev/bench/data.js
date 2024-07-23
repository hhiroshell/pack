window.BENCHMARK_DATA = {
  "lastUpdate": 1721720399953,
  "repoUrl": "https://github.com/hhiroshell/pack",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hhiroshell@gmail.com",
            "name": "hhiroshell",
            "username": "hhiroshell"
          },
          "committer": {
            "email": "hhiroshell@gmail.com",
            "name": "hhiroshell",
            "username": "hhiroshell"
          },
          "distinct": true,
          "id": "b5fc1c20cc15dd68ef6d68618d5c3649bdde000e",
          "message": "test workflow changes",
          "timestamp": "2024-07-23T16:23:40+09:00",
          "tree_id": "3f4b8b110b09e5ec5ef3edf12a6f1de875cba5eb",
          "url": "https://github.com/hhiroshell/pack/commit/b5fc1c20cc15dd68ef6d68618d5c3649bdde000e"
        },
        "date": 1721720399699,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBuild/with_Untrusted_Builder",
            "value": 4215895788,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuild/with_Trusted_Builder",
            "value": 1218757524,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuild/with_Additional_Buildpack",
            "value": 58408564412,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}