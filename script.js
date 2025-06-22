

    
// Usar map para extraer los nombres de autores (si eso es lo que se desea)
const Names = data.map(elementoActual => elementoActual.Authors);
const Years = data.map(elementoActual => elementoActual.Year);
const Description = data.map(elementoActual => elementoActual.Description);



    

const colores = ['#ed9268','#f4c353','#55b991','#50b4d0','#00BFFF','#68657f']

const w = 770;
const h = 480.8;

var iniciox_data = 35
var inicioy_data = 20


svg.attr("width", 795+20+4+30+20)
.attr("height", h)
.style("background-color", "white");




var Delta_X = 0;
var sum_X = iniciox_data;
var Last_Width = 0;

svg.selectAll("rect")
    .data(Description)
    .enter()
    .append("rect")
    .attr("x", (d, i) => {
        var fila = Math.floor(i / 6)
        var par = fila % 2 == 0 ? 1 : -1
        if (i % 6 == 0) {
            Delta_X = 0;
            sum_X = iniciox_data * par;
        } else {
            if (i % 6 == 1 || i % 6 == 3 || i % 6 == 4) {
                Delta_X = Ancho_Columna(i - 1) + 5;
            } else {
                Delta_X = Ancho_Columna(i - 1) + 5;
            }
        }

        sum_X += Delta_X;

        if (par == -1) {
            if (i % 6 == 5) {
                curva(w - sum_X - Ancho_Columna(i), Math.floor(i / 6) * 60 + inicioy_data, par);
            }
            var esquina_superior_izquierda = w - sum_X - Ancho_Columna(i);
            triangulo([esquina_superior_izquierda, Math.floor(i / 6) * 60 + inicioy_data], i, par);

            return w - sum_X - Ancho_Columna(i);
        }

        if (i % 6 == 5) {
       
            curva(sum_X + Ancho_Columna(i), Math.floor(i / 6) * 60 + inicioy_data);
        }
        triangulo([sum_X + Ancho_Columna(i), Math.floor(i / 6) * 60 + inicioy_data], i, par);

        return sum_X;
        })
        .attr("y", (d, i) => Math.floor(i / 6) * 60 + inicioy_data)
        .attr("width", (d, i) => {
        return Ancho_Columna(i);
        })
        .attr("height", (d, i) => 24)
        .attr("fill", (d, i) =>  Names.length == (i+1) ? "red" :colores[i % 4])
        .attr("class", "bar")
        .append("title")
        .text((d, i) => d);
    

  

// Agregar texto encima de los rectángulos
svg.selectAll("text")
    .data(Names)
    .enter()
    .append("text")
    .text((d, i) => d) 
    .attr("x", (d, i) => {
        var fila = Math.floor(i / 6);
        var par = fila % 2 == 0 ? 1 : -1;

        if (i % 6 == 0) {
            Delta_X = 0;
            sum_X = iniciox_data * par;
        } else {
            if (i % 6 == 1 || i % 6 == 3 || i % 6 == 4) {
                Delta_X = Ancho_Columna(i - 1) + 5;
            } else {
                Delta_X = Ancho_Columna(i - 1) + 5;
            }
        }

        sum_X += Delta_X;
        if (par == -1) {
            return (w - (sum_X) - Ancho_Columna(i)) + Ancho_Columna(i) / 2;
        }

        return sum_X + (Ancho_Columna(i) / 2);
        })
    .attr("y", (d, i) => Math.floor(i / 6) * 60 + inicioy_data + 15)
    .attr("dy", "-1.4em") // Genera el desplazamiento
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .append("title")
    .text((d, i) => Description[i]);
      

    

svg.selectAll(".text-inside") //Escogemos los textos dentro de los rectangulos
    .data(Years)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => {
    var fila = Math.floor(i / 6);
    var par = fila % 2 == 0 ? 1 : -1;

    if (i % 6 == 0) {
        Delta_X = 0;
        sum_X = iniciox_data * par;
    } else {
        if (i % 6 == 1 || i % 6 == 3 || i % 6 == 4) {
            Delta_X = Ancho_Columna(i - 1) + 5;
        } else {
            Delta_X = Ancho_Columna(i - 1) + 5;
        }
    }

    sum_X += Delta_X;
    if (par == -1) {
        return (w - (sum_X) - Ancho_Columna(i)) + Ancho_Columna(i) / 2;
    }

    return sum_X + (Ancho_Columna(i) / 2);
    })
    .attr("y", (d, i) => Math.floor(i / 6) * 60 + inicioy_data + 15)
    .attr("text-anchor", "middle")
    .style("font-size", "13px")
    .append("title")
    .text((d, i) => Description[i]);






        function Ancho_Columna(i) {
        if (i % 6 == 3 || i % 6 == 4) {
        return 155;
        } else if (i % 6 == 5) {
        return 70;
        } else if (i % 6 == 1  ) {
        return 145;
        }else {
        return 100;
        }
        }


        function triangulo(Inicio, j, flag) {
        var triangleData = [
        { x: Inicio[0], y: Inicio[1] - 5 }, 
        { x: Inicio[0] + 20 * flag, y: Inicio[1] + 12 }, 
        { x: Inicio[0], y: Inicio[1] + 12 + 12 + 5 }
        ];

        var points = triangleData.map(function(d) { return [d.x, d.y]; }).join(" ");



        svg.append("polygon")
        .attr("points", points)
        .style("fill", j == -10 ? "#68657F" :( Names.length == (j+1) ? "red" :  colores[j % 4]))
        .style("stroke-width", 2)
        .append("title")
        .text(Description[j])
        }





function curva(startx, starty, flag) {
        if (flag == -1) {
        var fg = -1;
        } else {
        var fg = 0;
        }

        var iniciox = startx;
        var inicioy = starty;
        var ancho = 25;
        var altura = 24;

     

        svg.append("rect")
              .attr("x", iniciox + fg * ancho)
              .attr("y", inicioy)
              .attr("width", ancho)
              .attr("height", altura)
              .style("fill", "#68657F");

        svg.append("rect")
        .attr("x", iniciox + ancho + 4 + fg * ((ancho + 4) + ancho + 4 + 24))
        .attr("y", inicioy + altura + 4)
        .attr("width", altura)
        .attr("height", 28)
        .style("fill", "#68657F");

        var generadorArco1 = d3.arc()
        .innerRadius(4)
        .outerRadius(28)
        .startAngle(fg * Math.PI + Math.PI / 2)
        .endAngle(Math.PI * 0);

        svg.append("path")
        .attr("d", generadorArco1)
        .attr("fill", "#68657F")
        .attr("transform", "translate(" + (iniciox + ancho + fg * 2 * ancho) + "," + (inicioy + altura + 4) + ")");

        var generadorArco2 = d3.arc()
        .innerRadius(4)
        .outerRadius(28)
        .startAngle(Math.PI / 2 - fg * Math.PI / 2)
        .endAngle(Math.PI - fg * Math.PI / 2);

        svg.append("path")
        .attr("d", generadorArco2)
        .attr("fill", "#68657F")
        .attr("transform", "translate(" + (iniciox + ancho + fg * 2 * ancho) + "," + (inicioy + altura + 4 + 28) + ")");

        triangulo([iniciox + ancho + fg * 2 * ancho, inicioy + altura +35], -10, fg == 0 ? -1 : 1);
        }
        
       
       

        
        
    
  
        
        
       
