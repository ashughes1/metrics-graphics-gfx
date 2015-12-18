function calculateAverage(data) {
  for (i=0; i<data.length; i++) {
    if (i < 7) {
      sum = 0
      for (j=0; j<=i; j++) {
        sum = sum + data[j]['count'];
      }
      data[i]['average'] = sum/(i+1);
    }
    else {
      sum = 0
      for (j=0; j<7; j++) {
        sum = sum + data[i-j]['count'];
      }
      data[i]['average'] = sum/7;
    }
  }
  return data;
}
