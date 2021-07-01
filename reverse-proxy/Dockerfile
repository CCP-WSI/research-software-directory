FROM nginx:1.17.8-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY software_scd_stfc_ac_uk.crt /etc/nginx/software_scd_stfc_ac_uk.crt 
COPY software.scd.stfc.ac.uk.key /etc/nginx/software.scd.stfc.ac.uk.key
CMD ["nginx","-g", "daemon off;"]
