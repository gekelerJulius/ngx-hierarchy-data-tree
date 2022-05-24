import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {HierarchyNode} from 'd3';

@Component({
  selector: 'ngx-hierarchy-data-tree',
  templateUrl: './ngx-hierarchy-data-tree.component.html',
  styleUrls: ['./ngx-hierarchy-data-tree.component.css']
})
export class NgxHierarchyDataTreeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const treeData = {
      "name": "Eve",
      "value": 15,
      "type": "black",
      "level": "yellow",
      "children": [
        {
          "name": "Cain",
          "value": 10,
          "type": "grey",
          "level": "red"
        },
        {
          "name": "Seth",
          "value": 10,
          "type": "grey",
          "level": "red",
          "children": [
            {
              "name": "Enos",
              "value": 7.5,
              "type": "grey",
              "level": "purple"
            },
            {
              "name": "Noam",
              "value": 7.5,
              "type": "grey",
              "level": "purple"
            }
          ]
        },
        {
          "name": "Abel",
          "value": 10,
          "type": "grey",
          "level": "blue"
        },
        {
          "name": "Awan",
          "value": 10,
          "type": "grey",
          "level": "green",
          "children": [
            {
              "name": "Enoch",
              "value": 7.5,
              "type": "grey",
              "level": "orange"
            }
          ]
        },
        {
          "name": "Azura",
          "value": 10,
          "type": "grey",
          "level": "green"
        }
      ]
    };

    // set the dimensions and margins of the diagram
    const margin = {top: 20, right: 90, bottom: 30, left: 90},
      width  = 660 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // Declares a tree layout and assigns the size
    const treemap = d3.tree().size([height, width]);
    let nodes: HierarchyNode<any> = d3.hierarchy(treeData);
    nodes = treemap(nodes);

    const svg = d3.select("#hierarchyTreeContainer").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom),
      g = svg.append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    const link = g.selectAll(".link")
      .data( nodes.descendants().slice(1))
      .enter().append("path")
      .attr("class", "link")
      .style("stroke", d => d.data.level)
      .attr("d", (d:any) => {
        return "M" + d.y + "," + d.x
          + "C" + (d.y + d.parent.y) / 2 + "," + d.x
          + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
          + " " + d.parent.y + "," + d.parent.x;
      });

    // adds each node as a group
    const node = g.selectAll(".node")
      .data(nodes.descendants())
      .enter().append("g")
      .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
      .attr("transform", (d:any) => "translate(" + d.y + "," + d.x + ")");

    // adds the circle to the node
    node.append("circle")
      .attr("r", d => d.data.value)
      .style("stroke", d => d.data.type)
      .style("fill", d => d.data.level);

// adds the text to the node
    node.append("text")
      .attr("dy", ".35em")
      .attr("x", d => d.children ? (d.data.value + 5) * -1 : d.data.value + 5)
      .attr("y", (d:any) => d.children && d.depth !== 0 ? -(d.data.value + 5) : d)
      .style("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name);
  }
}

