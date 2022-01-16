import numpy as np
import matplotlib.pyplot as plt
print( np.linspace(0,1,100) )
x = np.linspace(0,0.9,200) + np.random.rand(200)/10
y = np.linspace(0,0.9,200) + np.random.rand(200)/10
t = np.arange(200)

plt.scatter(x, y, c=t)
plt.legend()
plt.show()