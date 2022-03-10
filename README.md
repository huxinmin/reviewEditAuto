# reviewEditAuto

scan your project, only review edited code in given time-range automatic

# Requirement

require nodejs version>= 16.0.0

# Mechanism

1. list your edited files in given time-range
2. scan these files and auto review
3. extract only changed lines
4. generate report

# Usage

```
npm install -g review-edit-auto
cd yourProject
review --since 2022-03-02
# or
review --since 2.weeks
```

<img src="./img/res.jpg" width="300"  align=center>
