function triangle(triangleform) {
    if (triangleform.a.value==triangleform.b.value & triangleform.a.value==triangleform.c.value & triangleform.b.value==triangleform.c.value)
            alert("Trójkąt równoboczny");
            else if(triangleform.a.value==triangleform.b.value || triangleform.a.value==triangleform.c.value || triangleform.b.value==triangleform.c.value)
                alert("Trójkąt równoramienny");
                else 
                alert("Trójkąt różnoboczny");
}