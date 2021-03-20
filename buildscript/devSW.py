import glob
import os

if os.path.exists('../dev/sw.js'):
    print('\x1b[31mDeleting old service Workers\x1b[0m')
    for file in glob.glob('../dev/sw.js*') + glob.glob('../dev/workbox*'):
        os.remove(file)
        print('\x1b[90m\x1b[2Gdeleted ' + '/'.join(file.split("\\")[:-1]) + '\x1b[32m/' + file.split("\\")[-1] + '\x1b[0m')

print('\x1b[32mGenerating new service Workers\x1b[0m')
os.popen('workbox generateSW workboxDev.js').read()
print('\x1b[32mDone\x1b[0m')
