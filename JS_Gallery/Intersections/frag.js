//noprotect
const frag = `
	#ifdef GL_ES
	precision highp float;
	#endif

  #define PI 3.141592653589793
  #define TAU 6.283185307179586

	uniform vec2 u_resolution;
	uniform vec2 u_mouse;
	uniform float u_time;
	uniform sampler2D tex0;
	uniform vec4 whirls[${whirlCount}];
	int whirlCount = ${whirlCount};
	
	uniform mat3 uNormalMatrix;
	//attributes, in
	varying vec4 var_centerGlPosition;
	varying vec3 var_vertNormal;
	varying vec2 var_vertTexCoord;
 
  
	${frag_functions_default}


	void main(){

		vec2 st = var_vertTexCoord;		
		
		
		// st+=cnoise(vec3(st*20000.,0.))/200.;
		st+=cnoise(vec3(st*1.,u_time/50.))/100.;
		st+=cnoise(vec3(st*2.,u_time/10.))/100.;
		st+=cnoise(vec3(st*5.,u_time/10.))/100.;
		
		// st+=1.*st-(floor(st*1.)-0.5);

		// st+=sin(atan((st.y-0.5),(st.x-0.5)))/5.;
		// for(float k=0.;k<5.;k+=1.){
		// 	st+= sin(st*k)/1000.;
		// }
		
		// st+=cnoise(vec3(st*1.,0.))/100.;
		
		
		st.x *=u_resolution.x/u_resolution.y;
		st.y= 1.-st.y;
		
		float totalDelta = 0.;
		float totalAng = 0.;
		for(int i=0;i<${whirlCount};i++){
		  vec2 delta = st-whirls[i].xy;
			float d = length(delta);
			float ang = atan(delta.y,delta.x);
			
			// ang+=sin(d*1.)/100.;
			totalDelta +=ang*0.04/sqrt(d+0.001);
			totalAng+=ang;
			// totalAng+=sin(totalDelta)*5.;
			
// 			//modify and distort radius (distance to center);
			float dr = (1.-smoothstep(0.,whirls[i].w,d))*(-1.+sin(d*5.+u_time+float(i)))*(0.5+cos(d*40.+u_time+float(i)))/2.;
			d+=sin(dr/2.)/50.;
			
			
			ang+=sin(d*2.+ang*(u_mouse.y*10.)*sin(ang))/(u_mouse.x*10.+4.);
// 			// d+=sin(d*20.)/20.;
// 			// d+=cnoise(vec3(st*3.,u_time/200.))/100.;
// 			// ang+=cnoise(vec3(st*6.,u_time/2000.))/10.;
			
// 			//modify and distort angle (angle to center);
			float dAng = (1.-smoothstep(0.,whirls[i].w,d))*( (10.) *whirls[i].z)/2. ;
			ang += sin(dAng/2.)/200.;

			vec2 np = whirls[i].xy + d*vec2(cos(ang),sin(ang));

			st = np;
		}
		
		
		st.x+=sin(totalDelta*50.)*10.;
		st+=cnoise(vec3(st*1.,totalDelta));
		// st+=cnoise(vec3(st*1.,totalAng));
		
		// vec3 color = vec3(st.x+st.y/2.,st.y+ sin(st.y)/2.,st.y);
		
		vec2 f_st = fract(st*1.);
		vec2 i_st = floor(st*1.);

// 		vec3 color1 = vec3(sin(st.x),sin(st.x*1.1),sin(st.x*1.2));
// 		vec3 color2 = vec3(st.x/4.+st.y*2.,st.y/2.+sin(st.x/2.),st.x*st.y*3.);
// 		vec3 color3 = vec3(0.2+1.*cnoise(vec3(st*5.*1.00+0.0,u_time/8.)),
// 										   0.2+1.*cnoise(vec3(st*5.*1.02+0.02,u_time/8.)),
// 										   0.25+1.*cnoise(vec3(st*5.*1.04+0.04,u_time/8.)));

// 		vec3 color4 = vec3(st.x*1.2+sin(st.y)/2.,st.y/2.+sin(st.x)/2.,st.x*st.y/6.);
		// vec3 color = mix(color3,color4,0.01) ;
		vec3 color = vec3(
			sin(totalDelta*1.-PI/0.5)+	cos(totalDelta*1.),
			sin(totalDelta*1.001+PI/10.),
			sin(totalDelta*1.002+PI/-40.)
		);
		
		gl_FragColor= vec4(color,1.0);
	}
`



