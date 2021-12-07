const packages = [{ heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' }, { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' }, { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' }, { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' }, { heavy: true, priority: true, fragile: true, to: 'Brittany' }, { heavy: false, priority: true, fragile: false, to: 'Jonesy', trackingNumber: '8081baz' }, { heavy: true, priority: false, fragile: true, to: 'Justin', trackingNumber: 'suz2367' }]


function packageDetails() {
  console.log('button works')
  let box = " "
  for (let i = 0; i < packages.length; i++) {
    const box = packages[i];
    box += `  
    <ul>
            <li> ${box.to}</li>
            <li>${box.trackingNumber}</li>
            <li>${box.priority}</li>
            <li>${box.heavy}</li>
            <li>${box.fragile}</li>
          </ul>`;
  }
}


document.getElementById('box').innerhtml = box